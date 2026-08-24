import type { CurrencyCode, Product } from "@/types";

// FBIL reference rate published by RBI for 27 July 2026. Keep this configurable
// so storefront prices can be updated without changing catalog records.
export const USD_TO_INR_RATE = Number(process.env.USD_TO_INR_RATE) || 96.1856;

export function inrToUsd(amount: number) {
  return Math.round((amount / USD_TO_INR_RATE) * 100) / 100;
}

export function usdToInr(amount: number) {
  return Math.round(amount * USD_TO_INR_RATE * 100) / 100;
}

type PriceBearingProduct = {
  price: number;
  compareAtPrice?: number;
  currency?: CurrencyCode;
  variants?: Product["variants"];
};

export function toPublicInrProduct<T extends PriceBearingProduct>(product: T): T {
  if (product.currency !== "USD") {
    return { ...product, currency: "INR" } as T;
  }

  return {
    ...product,
    price: usdToInr(product.price),
    compareAtPrice:
      product.compareAtPrice === undefined
        ? undefined
        : usdToInr(product.compareAtPrice),
    currency: "INR",
    variants: product.variants?.map((variant) => ({
      ...variant,
      price:
        variant.price === undefined ? undefined : usdToInr(variant.price),
    })),
  } as T;
}
