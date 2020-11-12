feature 'testing power saving mode functionality' do
  before do
    visit('/')
  end

  it 'PSM is on by default' do
    10.times { click_on('Up') }
    expect(page.find("#temperature")).to have_content(25)
  end

  it 'Outputs message when PSM is turned off' do
    click_on('PSM off')
    expect(page.find("#psmoff")).to have_content('PSM turned off')
  end

  it 'Outputs message when PSM is turned on, after being turned off' do
    click_on('PSM off')
    click_on('PSM on')
    expect(page.find("#psmon")).to have_content('PSM turned on')
  end

  it 'can increase temp to 32 degrees when PSM is turned off' do
    click_on('PSM off')
    15.times { click_on('Up') }
    expect(page.find("#temperature")).to have_content(32)
  end
end