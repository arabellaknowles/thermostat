feature 'viewing the temperature' do
  before do 
    visit('/')
  end 

  it 'displays 20 by default' do
    expect(page).to have_content('20')
  end
end