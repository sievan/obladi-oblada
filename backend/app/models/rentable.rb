class Rentable < ActiveRecord::Base
  belongs_to :owner
  has_many :rentals

  def owner_name
    owner.user.name
  end

  def image=(image)
    uploaded_io = image
    File.open(
      Rails.root.join('public', 'uploads', uploaded_io.original_filename),
      'wb'
    ) do |file|
      file.write(uploaded_io.read)
    end
    self[:image] = image.original_filename
  end
end
