import { describe, expect, it } from "vitest";

import { navigation, pricingOffers, projects, services } from "./content";

describe("site content", () => {
  it("keeps navigation anchors unique and local", () => {
    const anchors = navigation.map((item) => item.href);

    expect(new Set(anchors).size).toBe(anchors.length);
    expect(anchors.every((href) => href.startsWith("#"))).toBe(true);
  });

  it("defines the four service areas from the brief", () => {
    expect(services).toHaveLength(4);
    expect(services.map((service) => service.number)).toEqual([
      "01",
      "02",
      "03",
      "04",
    ]);
  });

  it("features exactly one pricing offer", () => {
    expect(pricingOffers.filter((offer) => offer.featured)).toHaveLength(1);
  });

  it("links every pricing offer to a secure Google Form", () => {
    expect(
      pricingOffers.every((offer) => offer.href.startsWith("https://forms.gle/")),
    ).toBe(true);
  });

  it("keeps project links secure and project images local", () => {
    expect(projects.every((project) => project.href.startsWith("https://"))).toBe(
      true,
    );
    expect(projects.every((project) => project.image.startsWith("/"))).toBe(true);
  });
});
