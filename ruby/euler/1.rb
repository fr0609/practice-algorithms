result = 0
(1...1000).each do |val|
  if (val % 3 == 0) || (val % 5 == 0)
    result += val
  end
end

p result    
