interface ColorSelectorProps {
  colors: string[];
  activeColor: string;
  onColorChange: (color: string) => void;
}

const colorMap: Record<string, string> = {
  walnut: '#5d4037',
  oak: '#d7ccc8',
  black: '#111111',
  white: '#f5f5f5',
};

const ColorSelector = ({ colors, activeColor, onColorChange }: ColorSelectorProps) => {
  return (
    <div>
      <p className="label-text text-muted-foreground mb-4">
        Finish: <span className="text-foreground">{activeColor}</span>
      </p>
      <div className="flex space-x-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`w-8 h-8 rounded-full transition-all duration-300 ${
              activeColor === color
                ? 'ring-2 ring-foreground ring-offset-2 scale-110'
                : 'hover:scale-105'
            }`}
            style={{ backgroundColor: colorMap[color] || color }}
            aria-label={`Select ${color} finish`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
