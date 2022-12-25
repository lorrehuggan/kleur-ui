import chroma from "chroma-js";

function hexCodeCheck(hex: string): string {
  let colorCode = "";
  if (chroma.valid(hex) === false) {
    colorCode = "#111111";
  } else {
    colorCode = hex;
  }
  return colorCode;
}

export function isValidColor(hex: string): boolean {
  return chroma.valid(hex);
}

export function getShades(hex: string): string[] {
  const colorCode = hexCodeCheck(hex);

  let color = chroma(colorCode);
  const lumi = color.luminance();

  let bez = chroma.scale(["#fff", colorCode, "#000"]);

  if (colorCode === "#000000" || colorCode === "#000" || lumi < 0.15) {
    bez = chroma.scale(["#fff", colorCode]).correctLightness();
    const isBlack = colorCode === "#000000" || colorCode === "#000";
    return [
      bez(isBlack ? 0.0 : 0.05).hex(),
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

  if (hex === "#ffffff" || colorCode === "#fff" || lumi > 0.85) {
    bez = chroma.scale([colorCode, "#000"]).correctLightness();
    const isWhite = colorCode === "#ffffff" || colorCode === "#fff";
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
      bez(isWhite ? 1 : 0.9).hex(),
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
  const colorCode = hexCodeCheck(hex);
  const color = chroma(colorCode);

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

export function generateTailwindColorConfig(
  colors: string[],
  colorName: string
): string {
  let config = "";

  colors.forEach((color) => {
    if (color === colorName) {
      config += `  '${color}': {\n`;

      for (let i = 50; i <= 900; i += 100) {
        config += `    ${i}: '${color}-${i}',\n`;
      }

      config += `  },\n`;
    }
  });

  return config;
}
