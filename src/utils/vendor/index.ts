import {
  getShades,
  getTextColor,
  getRandomColor,
  isValidColor,
  generateTailwindColorConfig,
  getColorName,
} from "./color";

export const vendor = {
  getTextColor,
  getShades,
  getRandomColor,
  isValidColor,
  generateTailwindColorConfig,
  getColorName,
};

// class with all functions for color
export class Color {
  // color code
  private color: string;
  private name: string;

  // constructor
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  // get color code
  public getColor(): string {
    return this.color;
  }

  // get color shades
  public getShades(): string[] {
    return getShades(this.color);
  }

  // get text color
  public getTextColor(): string {
    return getTextColor(this.color);
  }

  // get random color
  public getRandomColor(): string {
    return getRandomColor();
  }

  // check if color is valid
  public isValidColor(): boolean {
    return isValidColor(this.color);
  }

  // generate tailwind color config
  public generateTailwindColorConfig(): string {
    return generateTailwindColorConfig(
      this.getShades(),
      this.name.toLowerCase()
    );
  }
}
