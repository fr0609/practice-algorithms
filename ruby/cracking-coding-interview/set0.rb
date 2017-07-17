array = [
  [0, 'b', 'c'],
  %w[d e f],
  ['g', 0, 'i'],
  %w[j k l]
]
def set_0(array)

  rows = array.length
  cols = array.first.length

  result = Array.new(rows) { Array.new(cols) }

  array.each_with_index do |row, index_row|
    row.each_with_index do |val, index_val|
      result[index_row][index_val] = 0 if val == 0
    end
  end

  result.each_with_index do |row, index_row|
    row.each_with_index do |val, index_col|
      next unless val == 0
      (rows - 1).downto(0) do |row_temp|
        array[row_temp][index_col] = 0
      end
      (cols - 1).downto(0) do |col_temp|
        array[index_row][col_temp] = 0
      end
    end
  end
  array
end


describe 'set to cero' do
  it 'entire row and column is set to 0' do
    expect(set_0([
                  [0, 'b', 'c'],
                  %w[d e f],
                  ['g', 0, 'i'],
                  %w[j k l]
                ]
)).to eq([[0, 0, 0],
          [0, 0, "f"], 
          [0, 0, 0],
          [0, 0, "l"]])
  end
end

