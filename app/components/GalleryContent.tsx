"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
};

type InstagramPaging = {
  cursors: {
    before: string;
    after: string;
  };
};

type InstagramFeed = {
  data: InstagramPost[];
  paging?: InstagramPaging;
};

export default function InstaFeed() {
  const [instagramFeed, setInstagramFeed] = useState<InstagramFeed | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = async (after: string | null = null) => {
    try {
      let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`;
      if (after) {
        url += `&after=${after}`;
      }
      const data = await fetch(url);

      if (!data.ok) {
        throw new Error("Failed to fetch Instagram feed");
      }

      const feed = await data.json();
      setInstagramFeed(feed);
      setAfter(feed.paging?.cursors.after);
    } catch (err: any) {
      console.error("Error fetching Instagram feed:", err.message);
      setError(err.message);
    }
  };

  const loadMore = () => {
    fetchFeed(after);
    console.log(after);
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <>

      {error && <p className="text-red-500">{error}</p>}

      {instagramFeed && (
        <div className="w-screen justify-center items-center bg-slate-500">
          <h2 className="text-2xl font-semibold mb-4">Instagram Feed:</h2>
          <div className="w-full grid grid-cols-4 gap-8">
            {instagramFeed.data.map((post: InstagramPost) => (
                <div key={post.id} className="break-words border border-l-indigo-300">
                <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-[300px] group w-full"
                >
                    {post.media_type === "VIDEO" ? (
                    <video
                        src={post.media_url}
                        controls={false}
                        className="w-full h-full object-cover"
                    />
                    ) : (
                    <Image
                        src={post.media_url}
                        alt={post.caption ?? ""}
                        className="w-full h-full object-cover"
                        width={300}
                        height={300}
                    />
                    )}
                </Link>
                <p className="mt-2 text-center text-sm text-gray-600 w-full max-w-full break-words overflow-hidden">
                    {post.caption || "No caption available"}
                </p>
                </div>
            ))}
            </div>


        </div>
      )}

    </>

  );
}
