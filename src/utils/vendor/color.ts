import chroma from "chroma-js";
import { TinyColor } from "@ctrl/tinycolor";

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
  let config = `'${colorName}': {\n`;

  colors.forEach((color, i) => {
    if (i === 0) {
      config += `   50: '${color}',\n`;
      return;
    }

    config += `   ${i * 100}: '${color}',\n`;
  });

  config += "},\n";

  return config;
}

// function to get color name
export function getColorName(hex: string): string {
  const colorCode = hexCodeCheck(hex);
  const color = chroma(colorCode);
  const colorName = color.name();

  return colorName;
}

// function to get color triad
export function getTriad(hex: string): string[] {
  const color = new TinyColor(hex);
  const colorTriad = color.triad();

  return colorTriad.map((color) => color.toHexString());
}

// function to get color complement
export function getComplement(hex: string): string[] {
  const color = new TinyColor(hex);
  const colorComplement = color.complement();

  return [colorComplement.toHexString()];
}

// function to get color tetrad
export function getTetrad(hex: string): string[] {
  const color = new TinyColor(hex);
  const colorTetrad = color.tetrad();

  return colorTetrad.map((color) => color.toHexString());
}

// function to get color splitcomplement
export function getSplitComplement(hex: string): string[] {
  const color = new TinyColor(hex);
  const colorSplitComplement = color.splitcomplement();

  return colorSplitComplement.map((color) => color.toHexString());
}

// function to get color monochromatic
export function getMonochromatic(hex: string): string[] {
  const color = new TinyColor(hex);
  const colorMonochromatic = color.monochromatic();

  return colorMonochromatic.map((color) => color.toHexString());
}

// function to get color analogous
export function getAnalogous(hex: string): string[] {
  const color = new TinyColor(hex);
  const colorAnalogous = color.analogous();

  return colorAnalogous.map((color) => color.toHexString());
}

export function getComplementaryColors(): string[] {
  const color = new TinyColor(getRandomColor());
  const colorComplement = color.complement();

  const colorComplementary = [
    colorComplement.toHexString(),
    colorComplement.spin(180).toHexString().toUpperCase(),
  ];

  return colorComplementary;
}

// function to get array 5 of complementary colors from random color
export function getComplementaryColorsArray(): string[] {
  const color = new TinyColor(getRandomColor());
  const colorComplement = color.complement();

  const colorComplementary = [
    colorComplement.toHexString(),
    colorComplement.spin(180).toHexString().toUpperCase(),
    colorComplement.spin(90).toHexString().toUpperCase(),
    colorComplement.spin(270).toHexString().toUpperCase(),
    colorComplement.spin(45).toHexString().toUpperCase(),
  ];

  return colorComplementary;
}

// function to get array 5 of analogous colors from random color
export function getAnalogousColorsArray(): string[] {
  const color = new TinyColor(getRandomColor());
  const colorAnalogous = color.analogous();

  const colorAnalogousArray = [
    colorAnalogous[0].toHexString(),
    colorAnalogous[1].toHexString().toUpperCase(),
    colorAnalogous[2].toHexString().toUpperCase(),
    colorAnalogous[3].toHexString().toUpperCase(),
    colorAnalogous[4].toHexString().toUpperCase(),
  ];

  return colorAnalogousArray;
}

// function to get array 5 of monochromatic colors from random color arrange based on luminance using chroma
export function getMonochromaticColorsArray(): string[] {
  const color = new TinyColor(getRandomColor());
  const colorMonochromatic = color.monochromatic();

  let colorMonochromaticArray = [
    colorMonochromatic[0].toHexString(),
    colorMonochromatic[1].toHexString().toUpperCase(),
    colorMonochromatic[2].toHexString().toUpperCase(),
    colorMonochromatic[3].toHexString().toUpperCase(),
    colorMonochromatic[4].toHexString().toUpperCase(),
  ];

  // sort color array based on luminance
  colorMonochromaticArray = colorMonochromaticArray.sort((a, b) => {
    const luminanceA = chroma(a).luminance();
    const luminanceB = chroma(b).luminance();

    return luminanceA - luminanceB;
  });

  return colorMonochromaticArray;
}

// function to get array of 5 colors from random color to make a gradient
export function getGradientColorsArray(): string[] {
  const color = new TinyColor(getRandomColor());
  const colorComplement = color.complement();

  const colorComplementary = [
    colorComplement.toHexString(),
    colorComplement.spin(180).toHexString().toUpperCase(),
    colorComplement.spin(90).toHexString().toUpperCase(),
    colorComplement.spin(270).toHexString().toUpperCase(),
    colorComplement.spin(45).toHexString().toUpperCase(),
  ];

  return colorComplementary;
}
