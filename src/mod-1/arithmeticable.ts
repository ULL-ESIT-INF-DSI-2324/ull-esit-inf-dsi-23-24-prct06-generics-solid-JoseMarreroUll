export interface Arithmeticable<T> {
  add(num1 :T) :T;
  substract(num1 :T) :T;
  multiply(num1 :T) :T;
  divide(num1 :T) :T | undefined;
}