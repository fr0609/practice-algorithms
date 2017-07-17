

result = rand(1...20)

p result 

number = 0

while (number.to_i != result)
    p "Give a number:"
    number = gets
    if number.to_i > result
        p "too high"
     end
    if number.to_i < result
        p "too low"
    end
 end 

 p "Great answer"  
        
        

