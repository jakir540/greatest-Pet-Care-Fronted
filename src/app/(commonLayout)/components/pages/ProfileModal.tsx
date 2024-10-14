import React from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    bio: string;
    phone: string;
    profilePicture?: string;
  }) => void;
  formData: {
    name: string;
    bio: string;
    phone: string;
    profilePicture?: string;
  } | null;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
}) => {
  const [name, setName] = React.useState(formData?.name || "");
  const [bio, setBio] = React.useState(formData?.bio || "");
  const [phone, setPhone] = React.useState(formData?.phone || "");
  const [profilePicture, setProfilePicture] = React.useState(
    formData?.profilePicture || ""
  );

  React.useEffect(() => {
    if (formData) {
      setName(formData.name);
      setBio(formData.bio);
      setPhone(formData.phone);
      setProfilePicture(formData.profilePicture || "");
    }
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, bio, phone, profilePicture });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transition-transform transform scale-100 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
          Edit Your Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-800"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-800"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              rows={4}
              placeholder="Tell us about yourself..."
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-800"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-800"
              htmlFor="profilePicture"
            >
              Profile Picture URL
            </label>
            <input
              type="text"
              id="profilePicture"
              name="profilePicture"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Paste image URL here"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="mr-2 bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
