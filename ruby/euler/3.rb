

def prime?(n)
  prime = true
  top = n ** 0.5
  (2...top).each do |val|
    if (n % val == 0)
        prime = false
        break
    end 
  end
  prime
end

limit = 600851475143
top = limit ** 0.5
largest = 1
(1..top ).each do |val|
    if ( limit % val == 0 ) && (prime?(val))
        largest = val
    end
end

p largest


