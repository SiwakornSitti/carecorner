import type { MetadataRoute } from "next";
import { ARTICLES } from "@/constants/articles";
import Article from "./articles/[id]/[title]/page";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://carecornerandmore.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://carecornerandmore.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://carecornerandmore.com/articles/1",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/articles/2",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/articles/3",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/articles/1/%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%94%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%99%E0%B8%A1%20%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/articles/2/%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20Thai-Denmark%20Nutrical(%E0%B9%84%E0%B8%97%E0%B8%A2-%E0%B9%80%E0%B8%94%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%20%E0%B8%99%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%B4%E0%B9%81%E0%B8%84%E0%B8%A5)",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/articles/3/Thai-Denmark%20Nutrical(%E0%B9%84%E0%B8%97%E0%B8%A2-%E0%B9%80%E0%B8%94%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%20%E0%B8%99%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%B4%E0%B9%81%E0%B8%84%E0%B8%A5)",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://carecornerandmore.com/categories",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9C%E0%B8%B4%E0%B8%A7%20%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B8%A1%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B2%E0%B8%81",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9C%E0%B8%B4%E0%B8%A7%20%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B8%A1%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B2%E0%B8%81",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%84%E0%B8%A5%E0%B8%B5%E0%B8%99%20%E0%B8%84%E0%B8%B5%E0%B9%82%E0%B8%95%20%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B8%95%E0%B9%88%E0%B8%B3%20%E0%B9%82%E0%B8%8B%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%95%E0%B9%88%E0%B8%B3",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%95%E0%B8%B5%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%95%E0%B8%B5%E0%B8%99%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%82%E0%B8%B2%E0%B8%A7",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%20superfoods",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B5%E0%B9%81%E0%B8%81%E0%B8%99%20%E0%B9%80%E0%B8%88%20%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%AE%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%A5",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99%20%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%A7%20%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%99%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%20%E0%B8%A5%E0%B8%B3%E0%B8%AA%E0%B8%B3%E0%B8%A5%E0%B8%B1%E0%B8%81",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%A2%E0%B8%B2%E0%B8%87",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%87",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%87",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B9%84%E0%B8%95",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%9A%E0%B8%B2%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%99%20%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%94%E0%B8%B1%E0%B8%99",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/categories/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carecornerandmore.com/products",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
