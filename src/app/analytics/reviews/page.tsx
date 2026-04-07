"use client";

import React from "react";
import Link from "next/link";
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
      <div>
        <h1 className="text-2xl font-bold">Reviews</h1>
        <p className="text-sm text-slate-500 mt-1">Collect and manage product reviews from your customers</p>
      </div>

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
          <ReviewCard key={r.id} review={r} getToken={getToken} onUpdate={load} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review: r, getToken, onUpdate }: { review: any; getToken: () => Promise<string | null>; onUpdate: () => void }) {
  const [replyText, setReplyText] = React.useState(r.reply || "");
  const [showReply, setShowReply] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  async function updateReview(data: any) {
    setSaving(true);
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/reviews/update", token, {
        method: "POST",
        body: JSON.stringify({ id: r.id, ...data }),
      });
      onUpdate();
    } catch (e) { console.error(e); }
    setSaving(false);
  }

  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
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
        <div className="flex gap-2 ml-4">
          {r.status === "pending" && (
            <>
              <button onClick={() => updateReview({ status: "approved" })} disabled={saving}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 disabled:opacity-50">
                Approve
              </button>
              <button onClick={() => updateReview({ status: "rejected" })} disabled={saving}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-700 hover:bg-red-100 disabled:opacity-50">
                Reject
              </button>
            </>
          )}
          <button onClick={() => setShowReply(!showReply)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border hover:bg-slate-50">
            {r.reply ? "Edit Reply" : "Reply"}
          </button>
        </div>
      </div>

      {r.reply && !showReply && (
        <div className="mt-3 pl-4 border-l-2 border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Store reply</div>
          <p className="text-sm text-slate-600 mt-1">{r.reply}</p>
        </div>
      )}

      {showReply && (
        <div className="mt-3 border-t pt-3">
          <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)}
            rows={3} placeholder="Write your reply..."
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          <div className="flex gap-2 mt-2">
            <button onClick={() => { updateReview({ reply: replyText }); setShowReply(false); }} disabled={saving || !replyText.trim()}
              className="px-4 py-1.5 rounded-lg text-sm bg-gray-900 text-white hover:opacity-90 disabled:opacity-50">
              {saving ? "Saving..." : "Save Reply"}
            </button>
            <button onClick={() => setShowReply(false)} className="px-4 py-1.5 rounded-lg text-sm border hover:bg-slate-50">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
