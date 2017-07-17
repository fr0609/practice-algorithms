prices = {
    'orange' => 10,
    'apple' => 20,
    'bread' => 100,
    'tomato' => 25,
    'cereal' => 234
}

shopping_list = <<-LIST
 list
 orange
 apple
 apple
 orange
 tomato
 cereal
 bread
 orange
 tomato
LIST

list = shopping_list.to_s.split(' ')

# Given the following price list and shopping
total = 0
for shop in list
  if(! prices[shop].nil?)
    total += prices[shop]
  end
end

p total
# list print out the total cost of the shopping
# list in pounds and pence


class Dog
  def initialize(breed)
    @breed = breed
  end
end

class Lab < Dog
  def initialize(breed, name)
    super(breed)
    @name = name
  end

  def to_s
    "(#@breed, #@name)"
  end
end

puts Lab.new("Labrador", "Benzy").to_s