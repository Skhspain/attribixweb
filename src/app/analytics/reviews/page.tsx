"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-600",
  approved: "bg-emerald-50 text-emerald-600",
  rejected: "bg-red-50 text-red-600",
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );
}

export default function ReviewsPage() {
  const { getToken } = useAuth();
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [stats, setStats] = React.useState<Record<string, number>>({});
  const [avgRating, setAvgRating] = React.useState(0);
  const [totalApproved, setTotalApproved] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<string>("all");

  React.useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const token = await getToken();
        const url = filter === "all" ? "/api/standalone/reviews" : `/api/standalone/reviews?status=${filter}`;
        const res = await attribixFetch(url, token);
        const data = await res.json();
        if (data.ok) {
          setReviews(data.reviews || []);
          setStats(data.stats || {});
          setAvgRating(data.avgRating || 0);
          setTotalApproved(data.totalApproved || 0);
        }
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [filter]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Average Rating</div>
          <div className="text-2xl font-bold mt-1 flex items-center gap-2">
            {avgRating > 0 ? avgRating : "—"}
            {avgRating > 0 && <Stars rating={Math.round(avgRating)} />}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Total Approved</div>
          <div className="text-2xl font-bold mt-1 text-emerald-600">{totalApproved}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Pending Review</div>
          <div className="text-2xl font-bold mt-1 text-yellow-600">{stats.pending || 0}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Rejected</div>
          <div className="text-2xl font-bold mt-1 text-slate-400">{stats.rejected || 0}</div>
        </div>
      </div>

      <div className="flex gap-2">
        {["all", "pending", "approved", "rejected"].map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-sm capitalize ${filter === s ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {loading && <div className="text-center py-8 text-slate-400">Loading...</div>}
        {!loading && reviews.length === 0 && <div className="text-center py-8 text-slate-400">No reviews yet</div>}
        {reviews.map((r: any) => (
          <div key={r.id} className="rounded-xl border bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Stars rating={r.rating} />
                  <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_COLORS[r.status] || "bg-slate-100"}`}>
                    {r.status}
                  </span>
                  {r.verifiedPurchase && (
                    <span className="inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-600">Verified</span>
                  )}
                </div>
                {r.title && <h3 className="font-semibold mt-2">{r.title}</h3>}
                <p className="text-sm text-slate-600 mt-1">{r.body}</p>
                <div className="text-xs text-slate-400 mt-2">
                  {r.reviewerName} · {r.productTitle || "Product"} · {new Date(r.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            {r.reply && (
              <div className="mt-3 pl-4 border-l-2 border-slate-200">
                <div className="text-xs text-slate-500 font-medium">Store reply</div>
                <p className="text-sm text-slate-600 mt-1">{r.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
