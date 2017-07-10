


def fibonacci(n)
    if n <= 1 
        return 1 
    end
    return fibonacci(n-1) + fibonacci(n-2)
end

result = 0
LIMIT = 4000000
(1..10000).each do |val|
    fib  = fibonacci(val)
    if fib > LIMIT 
        break 
    end
    if ( fib % 2  == 0 ) 
        result += fib
    end
end

p result