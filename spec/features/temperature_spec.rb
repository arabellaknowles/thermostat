feature 'viewing the temperature' do
  before do 
    visit('/')
  end 

  it 'displays 20 by default' do
    expect(page).to have_content(20)
  end

  it 'increases temp by 1 degree when clicking Up' do
    click_button('Up')
    expect(page.find("#temperature")).to have_content(21)
  end
  
  it 'decreases temp by 1 degree when clicking Down' do
    click_button('Down')
    expect(page.find("#temperature")).to have_content(19)
  end
end