feature 'viewing the temperature' do
  before do 
    visit('/')
  end 

  it 'displays 20 by default' do
    expect(page).to have_content(20)
  end

  it 'increased temp by 1 degree when clicking up' do
    click_button('Up')
    expect(page.find("#temperature")).to have_content(21)
  end
end