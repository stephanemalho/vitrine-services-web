import { describe, expect, it } from "vitest";

import { serializeJsonLd } from "../components/json-ld";
import { pricingOffers } from "./content";
import {
  getHomeStructuredData,
  getOfferStructuredData,
} from "./structured-data";

type JsonLdNode = Record<string, unknown>;

describe("structured data", () => {
  it("publishes every visible pricing offer in the home catalog", () => {
    const data = getHomeStructuredData();
    const graph = data["@graph"] as JsonLdNode[];
    const organization = graph.find(
      (item) => item["@type"] === "Organization",
    );
    const catalog = organization?.hasOfferCatalog as JsonLdNode;
    const catalogItems = catalog.itemListElement as unknown[];

    expect(catalogItems).toHaveLength(pricingOffers.length);
  });

  it("publishes fixed prices excluding VAT without inventing a quote price", () => {
    for (const offer of pricingOffers) {
      const data = getOfferStructuredData(offer);
      const graph = data["@graph"] as JsonLdNode[];
      const service = graph.find(
        (item) => item["@type"] === "Service",
      );
      const offers = service?.offers as JsonLdNode;
      const itemOffered = offers.itemOffered as JsonLdNode;

      expect(itemOffered["@id"]).toContain(offer.slug);

      if (offer.priceAmount === null) {
        expect(offers).not.toHaveProperty("price");
        expect(offers).not.toHaveProperty("priceSpecification");
      } else {
        const priceSpecification = offers.priceSpecification as JsonLdNode;

        expect(offers.price).toBe(String(offer.priceAmount));
        expect(priceSpecification.valueAddedTaxIncluded).toBe(false);
      }
    }
  });

  it("escapes markup-like content before embedding JSON-LD", () => {
    expect(serializeJsonLd({ value: "</script>" })).not.toContain("<");
  });
});
