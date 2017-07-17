a =  [1, 60, -10, 70, -80, 85]

#a =  [-5,-5,-8];


sum = a.first + a.last
a.each_with_index do |index, val|
    a.each_with_index do |index2, val2|
       next if  index == index2
       temp = val + val2
       if  sum.abs > temp.abs
         sum = temp
       end
     end
end
 p sum