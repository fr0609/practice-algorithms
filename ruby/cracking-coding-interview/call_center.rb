class Parent
  @@drink = 'wine'
end
class Child < Parent
  @@drink = 'milk'
end
class Parent
  puts @@drink
end

p Parent.drink
