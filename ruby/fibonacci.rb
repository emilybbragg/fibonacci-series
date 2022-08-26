def fibonacci(num)
 previous_vals = [0, 1]

 return previous_vals[num] if num < 2

 (num-1).times do
  new_sum = previous_vals[0] + previous_vals[1]
  previous_vals = [previous_vals[1], new_sum]
 end

 previous_vals.last

end

# takes in a number as an argument
# for each number, add together all previous numbers 
# returns n value based on previous numbers



if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
