"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FolderPlus,
  Image as ImageIcon,
  Loader2,
  Pencil,
  Plus,
  Search,
  Trash2,
  Utensils,
  X,
  Check,
} from "lucide-react";
import { useToast } from "../../../components/providers/ToastProvider";
import Skeleton from "../../../components/ui/Skeleton";

// const API = "http://localhost/manduhub_backend/menu";
const API = "https://mandu.gr8.com.np/menu";

function toCurrency(value) {
  const amount = Number(value);
  if (Number.isNaN(amount)) return `Rs. ${value || "-"}`;
  return `Rs. ${amount.toLocaleString()}`;
}

const EMPTY_FORM = { name: "", description: "", price: "", image: null };

// ─── Edit Modal ──────────────────────────────────────────────────────────────
function EditItemModal({ item, onClose, onSave }) {
  const [form, setForm] = useState({
    name: item.name || "",
    description: item.description || "",
    price: item.price || "",
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (!form.image) { setPreviewUrl(""); return; }
    const url = URL.createObjectURL(form.image);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [form.image]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const existingImageUrl = item.image_url
    ? item.image_url.startsWith("http")
      ? item.image_url
      : `https://mandu.gr8.com.np/${item.image_url.replace(/^\/+/, "")}`
    : null;

  const displayPreview = previewUrl || existingImageUrl;

  const handleSave = async () => {
    if (!form.name.trim() || !form.price) {
      showToast("Name and price are required.", "warning");
      return;
    }

    setSaving(true);
    const fd = new FormData();
    fd.append("id", item.id);
    fd.append("name", form.name.trim());
    fd.append("description", form.description.trim());
    fd.append("price", form.price);
    if (form.image) fd.append("image", form.image);

    try {
      const res = await fetch(`${API}/edit_item.php`, { method: "POST", body: fd });
      const data = await res.json().catch(() => null);

      if (!res.ok || data?.success === false) {
        showToast(data?.message || "Failed to update item.", "error");
        return;
      }

      showToast(data?.message || "Item updated.", "success");
      onSave();
      onClose();
    } catch {
      showToast("Failed to update item.", "error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
              <Pencil className="h-4 w-4 text-[#E9842C]" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Edit Menu Item</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Item Name
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Momo Platter"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Short description of the item"
                className="h-20 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Price (Rs.)
              </label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="e.g. 250"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Image {existingImageUrl && !previewUrl ? "(current shown below)" : ""}
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5">
              <ImageIcon className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, image: e.target.files?.[0] || null }))
                }
                className="w-full text-sm text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
              />
            </div>
            <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              {displayPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={displayPreview}
                  alt="Preview"
                  className="h-40 w-full object-contain"
                />
              ) : (
                <div className="flex h-40 items-center justify-center text-sm text-slate-400">
                  No image
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-slate-100 px-6 py-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#E9842C] py-2.5 text-sm font-semibold text-white transition hover:bg-[#cf7320] disabled:opacity-60"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p
        className="mt-2 text-3xl font-bold tabular-nums"
        style={{ color: accent || "inherit" }}
      >
        {value}
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MenuAdmin() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isItemsLoading, setIsItemsLoading] = useState(false);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [menuImagePreviewUrl, setMenuImagePreviewUrl] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const [form, setForm] = useState(EMPTY_FORM);
  const { showToast, showConfirm } = useToast();
  const newCategoryInputRef = useRef(null);

  // ── Data fetching ──────────────────────────────────────────────────────────
  const fetchItems = useCallback(
    async (categoryId) => {
      if (!categoryId) { setItems([]); return; }
      setIsItemsLoading(true);
      try {
        const res = await fetch(`${API}/get_items.php?category_id=${categoryId}`);
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch {
        setItems([]);
        showToast("Failed to fetch items.", "error");
      } finally {
        setIsItemsLoading(false);
      }
    },
    [showToast]
  );

  const fetchCategories = useCallback(
    async (preferredCategory = null) => {
      setIsCategoriesLoading(true);
      try {
        const res = await fetch(`${API}/get_categories.php`);
        const data = await res.json();
        const safeCategories = Array.isArray(data) ? data : [];
        setCategories(safeCategories);

        if (safeCategories.length === 0) {
          setActiveCategory(null);
          setItems([]);
          return;
        }

        const preferredExists =
          preferredCategory !== null &&
          safeCategories.some((c) => String(c.id) === String(preferredCategory));
        const nextCategory = preferredExists ? preferredCategory : safeCategories[0].id;

        setActiveCategory(nextCategory);
        await fetchItems(nextCategory);
      } catch {
        setCategories([]);
        showToast("Failed to fetch categories.", "error");
      } finally {
        setIsCategoriesLoading(false);
      }
    },
    [fetchItems, showToast]
  );

  useEffect(() => { fetchCategories(); }, [fetchCategories]);

  useEffect(() => {
    if (!form.image) { setMenuImagePreviewUrl(""); return; }
    const url = URL.createObjectURL(form.image);
    setMenuImagePreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [form.image]);

  // ── Actions ────────────────────────────────────────────────────────────────
  const handleCategoryClick = async (id) => {
    setActiveCategory(id);
    setSearchTerm("");
    await fetchItems(id);
  };

  const addCategory = async () => {
    if (!newCategory.trim()) {
      showToast("Enter a category name first.", "warning");
      newCategoryInputRef.current?.focus();
      return;
    }
    try {
      const res = await fetch(`${API}/add_category.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory.trim() }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success === false) {
        showToast(data?.message || "Failed to add category.", "error");
        return;
      }
      const current = activeCategory;
      setNewCategory("");
      await fetchCategories(current);
      showToast(data?.message || "Category added.", "success");
    } catch {
      showToast("Failed to add category.", "error");
    }
  };

  const deleteCategory = async (id) => {
    const confirmed = await showConfirm(
      "Delete this category and all its menu items?",
      { type: "error", confirmLabel: "Delete" }
    );
    if (!confirmed) return;
    try {
      const res = await fetch(`${API}/delete_category.php?id=${id}`);
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success === false) {
        showToast(data?.message || "Failed to delete category.", "error");
        return;
      }
      await fetchCategories(String(activeCategory) === String(id) ? null : activeCategory);
      showToast(data?.message || "Category deleted.", "success");
    } catch {
      showToast("Failed to delete category.", "error");
    }
  };

  const addItem = async () => {
    if (!activeCategory || !form.name.trim() || !form.price) {
      showToast("Category, name and price are required.", "warning");
      return;
    }
    const fd = new FormData();
    fd.append("category_id", activeCategory);
    fd.append("name", form.name.trim());
    fd.append("description", form.description.trim());
    fd.append("price", form.price);
    if (form.image) fd.append("image", form.image);
    try {
      const res = await fetch(`${API}/add_item.php`, { method: "POST", body: fd });
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success === false) {
        showToast(data?.message || "Failed to add menu item.", "error");
        return;
      }
      setForm(EMPTY_FORM);
      await fetchItems(activeCategory);
      showToast(data?.message || "Menu item added.", "success");
    } catch {
      showToast("Failed to add menu item.", "error");
    }
  };

  const deleteItem = async (id) => {
    const confirmed = await showConfirm("Delete this item?", {
      type: "error",
      confirmLabel: "Delete",
    });
    if (!confirmed) return;
    try {
      const res = await fetch(`${API}/delete_item.php?id=${id}`);
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success === false) {
        showToast(data?.message || "Failed to delete item.", "error");
        return;
      }
      await fetchItems(activeCategory);
      showToast(data?.message || "Menu item deleted.", "success");
    } catch {
      showToast("Failed to delete item.", "error");
    }
  };

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return items;
    return items.filter((item) =>
      [item.name, item.description, item.price].join(" ").toLowerCase().includes(query)
    );
  }, [items, searchTerm]);

  const activeCategoryName = categories.find(
    (c) => String(c.id) === String(activeCategory)
  )?.name;

  return (
    <>
      {editingItem && (
        <EditItemModal
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onSave={() => fetchItems(activeCategory)}
        />
      )}

      <div className="mx-auto max-w-7xl space-y-5">
        {/* ── Page Header ── */}
        <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100">
                  <Utensils className="h-5 w-5 text-[#E9842C]" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900">Menu Management</h1>
              </div>
              <p className="mt-1.5 text-sm text-slate-500">
                Manage categories, upload items, and set pricing.
              </p>
            </div>

            {isItemsLoading && (
              <span className="inline-flex items-center gap-2 self-start rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-[#E9842C]">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Loading items…
              </span>
            )}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <StatCard label="Categories" value={categories.length} />
            <StatCard label="In Category" value={items.length} accent="#E9842C" />
            <StatCard label="Filtered" value={filteredItems.length} />
          </div>
        </header>

        {/* ── Body Grid ── */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">

          {/* Sidebar: Categories */}
          <aside className="xl:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                <FolderPlus className="h-4 w-4" />
                Categories
              </h2>

              {/* Add Category */}
              <div className="mb-4 flex gap-2">
                <input
                  ref={newCategoryInputRef}
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") addCategory(); }}
                  placeholder="New category…"
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
                />
                <button
                  onClick={addCategory}
                  className="rounded-xl bg-[#E9842C] px-3 text-white transition hover:bg-[#cf7320]"
                  aria-label="Add category"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* List */}
              <div className="space-y-1.5">
                {isCategoriesLoading &&
                  Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-xl" />
                  ))}

                {!isCategoriesLoading && categories.length === 0 && (
                  <div className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-xs text-slate-400">
                    No categories yet.
                  </div>
                )}

                {!isCategoriesLoading &&
                  categories.map((cat) => {
                    const isActive = String(activeCategory) === String(cat.id);
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                          isActive
                            ? "bg-[#E9842C] text-white shadow-sm"
                            : "text-slate-700 hover:bg-orange-50"
                        }`}
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => { e.stopPropagation(); deleteCategory(cat.id); }}
                          onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); deleteCategory(cat.id); } }}
                          className={`rounded-lg p-1 transition ${
                            isActive ? "hover:bg-white/20" : "hover:bg-red-100"
                          }`}
                        >
                          <Trash2
                            className={`h-3.5 w-3.5 ${isActive ? "text-white/80" : "text-red-400"}`}
                          />
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-5 xl:col-span-9">
            {activeCategory ? (
              <>
                {/* ── Add Item Form ── */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
                    Add Item to{" "}
                    <span className="text-slate-900">{activeCategoryName}</span>
                  </h2>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <input
                      placeholder="Item name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
                    />
                    <input
                      placeholder="Price (Rs.)"
                      type="number"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
                    />
                    <textarea
                      placeholder="Description (optional)"
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="col-span-full h-20 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
                    />

                    {/* Image picker + preview */}
                    <div className="col-span-full grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5">
                          <ImageIcon className="h-4 w-4 shrink-0 text-slate-400" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setForm((prev) => ({
                                ...prev,
                                image: e.target.files?.[0] || null,
                              }))
                            }
                            className="w-full text-xs text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                          />
                        </div>
                        <p className="truncate px-1 text-xs text-slate-400">
                          {form.image?.name || "No file selected"}
                        </p>
                      </div>

                      <div className="overflow-hidden rounded-xl border border-slate-200">
                        {menuImagePreviewUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={menuImagePreviewUrl}
                            alt="Preview"
                            className="h-32 w-full object-contain bg-slate-50"
                          />
                        ) : (
                          <div className="flex h-32 items-center justify-center bg-slate-50 text-xs text-slate-400">
                            Image preview
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={addItem}
                      className="col-span-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
                    >
                      Add Item
                    </button>
                  </div>
                </section>

                {/* ── Items List ── */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      Items{" "}
                      {!isItemsLoading && (
                        <span className="ml-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                          {filteredItems.length}
                        </span>
                      )}
                    </h2>
                    <div className="relative w-full sm:w-72">
                      <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search items…"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-8 pr-3 text-sm outline-none transition focus:border-[#E9842C] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {isItemsLoading &&
                      Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                        >
                          <Skeleton className="h-14 w-16 shrink-0 rounded-lg" />
                          <div className="flex-1">
                            <Skeleton className="mb-2 h-4 w-40" />
                            <Skeleton className="h-3 w-24" />
                          </div>
                          <Skeleton className="h-8 w-20" />
                        </div>
                      ))}

                    {!isItemsLoading && filteredItems.length === 0 && (
                      <div className="rounded-xl border border-dashed border-slate-200 py-14 text-center">
                        <Utensils className="mx-auto mb-3 h-8 w-8 text-slate-300" />
                        <p className="text-sm text-slate-500">
                          {items.length === 0
                            ? "No items in this category yet."
                            : "No items match your search."}
                        </p>
                      </div>
                    )}

                    {!isItemsLoading &&
                      filteredItems.map((item) => {
                        const imgSrc = item.image_url
                          ? item.image_url.startsWith("http")
                            ? item.image_url
                            : `https://mandu.gr8.com.np/${item.image_url.replace(/^\/+/, "")}`
                          : null;

                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3 transition hover:bg-slate-50/60"
                          >
                            {/* Thumbnail + Info */}
                            <div className="flex min-w-0 items-center gap-3">
                              <div className="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                                {imgSrc ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={imgSrc}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                ) : (
                                  <Utensils className="h-4 w-4 text-slate-300" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-slate-800">
                                  {item.name}
                                </p>
                                <p className="truncate text-xs text-slate-400">
                                  {item.description || "No description"}
                                </p>
                                <p className="mt-1 text-sm font-bold text-[#E9842C]">
                                  {toCurrency(item.price)}
                                </p>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex shrink-0 items-center gap-2">
                              <button
                                onClick={() => setEditingItem(item)}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#E9842C] hover:text-[#E9842C]"
                              >
                                <Pencil className="h-3.5 w-3.5" />
                                Edit
                              </button>
                              <button
                                onClick={() => deleteItem(item.id)}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                Delete
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </section>
              </>
            ) : (
              <div className="flex h-full min-h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-16 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    <Utensils className="h-6 w-6 text-[#E9842C]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">No category selected</h3>
                  <p className="mt-1.5 text-sm text-slate-500">
                    Create or pick a category to manage its items.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}