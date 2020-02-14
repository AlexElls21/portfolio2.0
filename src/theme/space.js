const base = 1;
const createSize = multiplier => `${multiplier * base}rem`;

export default {
  small: createSize(0.5),
  regular: createSize(1),
  medium: createSize(1.5),
  large: createSize(2.0)
};
