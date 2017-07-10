


TOP = 999999999
result = 0
result = false
(1..TOP).each do |num|
  (1..20).each do |x|
    result = true
    if  num % x != 0 
      result = false
      break
    end
  end
    if result == true
        p num 
        break
    end
end