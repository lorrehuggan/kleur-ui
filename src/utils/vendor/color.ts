import chroma from "chroma-js";

export function getShades(hex: string): string[] {
  let bez = chroma.scale(["#fff", hex, "#000"]);

  if (hex === "#000000" || hex === "#000") {
    bez = chroma.scale(["#fff", hex]);
    return [
      bez(0.0).hex(),
      bez(0.1).hex(),
      bez(0.2).hex(),
      bez(0.3).hex(),
      bez(0.4).hex(),
      bez(0.5).hex(),
      bez(0.6).hex(),
      bez(0.7).hex(),
      bez(0.8).hex(),
      bez(1).hex(),
    ];
  }

  if (hex === "#ffffff" || hex === "#fff") {
    bez = chroma.scale([hex, "#000"]);
    return [
      bez(0.0).hex(),
      bez(0.1).hex(),
      bez(0.2).hex(),
      bez(0.3).hex(),
      bez(0.4).hex(),
      bez(0.5).hex(),
      bez(0.6).hex(),
      bez(0.7).hex(),
      bez(0.8).hex(),
      bez(1).hex(),
    ];
  }

  return [
    bez(0.05).hex(),
    bez(0.1).hex(),
    bez(0.2).hex(),
    bez(0.3).hex(),
    bez(0.4).hex(),
    bez(0.5).hex(),
    bez(0.6).hex(),
    bez(0.7).hex(),
    bez(0.8).hex(),
    bez(0.9).hex(),
  ];
}

export function getTextColor(hex: string): string {
  const color = chroma(hex);

  return color.luminance() > 0.5
    ? color.darken(3).hex()
    : color.brighten(3).hex();
}

export function getRandomColor(): string {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}
