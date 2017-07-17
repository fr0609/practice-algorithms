def rotate_90(m)
  rows = m.length
  cols = m.length
  result = Array.new(rows) { Array.new(cols) }
  m.each_with_index do |row, row_index|
    row.each_with_index do |col, col_index|
      result[col_index][row_index] = col
    end
  end
  result.reverse!
end

describe 'rotate' do
  it 'rotate by 90 degress' do
    expect(rotate_90([[1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9]])).to eq([[3, 6, 9],
                                          [2, 5, 8],
                                          [1, 4, 7]])
  end
end
