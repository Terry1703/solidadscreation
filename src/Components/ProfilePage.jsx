import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ProfilePage.css';

function ProfilePage() {
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loadingFollowers, setLoadingFollowers] = useState(false);
  const [loadingFollowing, setLoadingFollowing] = useState(false);
  const [username, setUsername] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUsername(decoded.username); 
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  }, []);

  const fetchFollowers = async () => {
    try {
      setLoadingFollowers(true);
      const response = await fetch("/api/followers");
      const data = await response.json();
      setFollowers(data);
    } catch (error) {
      console.error("Error fetching followers:", error);
    } finally {
      setLoadingFollowers(false);
    }
  };

  const fetchFollowing = async () => {
    try {
      setLoadingFollowing(true);
      const response = await fetch("/api/following");
      const data = await response.json();
      setFollowing(data);
    } catch (error) {
      console.error("Error fetching following:", error);
    } finally {
      setLoadingFollowing(false);
    }
  };

  const handleFollowersClick = () => {
    setShowFollowersModal(true);
    fetchFollowers();
  };

  const handleFollowingClick = () => {
    setShowFollowingModal(true);
    fetchFollowing();
  };

  const handleCommunitiesClick = () => {
    navigate("/communitychat");
  };

  const closeModal = () => {
    setShowFollowersModal(false);
    setShowFollowingModal(false);
  };


  return (
    <div className="profile-page">
      {/* Profile Section */}
    <section className="profile-container">
        <div className="profile-header">
            <div className="profile-img-container">
            <img
                src="https://images.unsplash.com/photo-1738363436173-0b49cd20dea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="https://github.com/Terry1703"
                className="profile-image"
            />
        </div>
        <div className="profile-info">
            <h2 className="profile-username">
            {username ? username : "Loading..."}{" "}
                <button className="edit-profile-btn">Edit Profile</button>
            </h2>
            <p className="profile-stats">
                <span onClick={handleFollowersClick} className="stats-link">
                Followers: {followers.length}         </span>
                <span className="stats-divider">|</span>
                <span onClick={handleFollowingClick} className="stats-link">
                Following: {following.length}
                </span>
                <span className="stats-divider">|</span>
                <span onClick={handleCommunitiesClick} className="stats-link">
                Communities
                </span>
            </p>
            </div>
        </div>

        {showFollowersModal && (
            <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Followers</h2>
                {loadingFollowers ? (
                <p>Loading...</p>
                ) : (
                <ul>
                    {followers.map((follower, index) => (
                    <li key={index}>{follower.name}</li>
                    ))}
                </ul>
                )}
                <button onClick={closeModal} className="modal-close-btn">
                Close
                </button>
            </div>
            </div>
        )}

        {showFollowingModal && (
            <div className="modal-overlay">
            <div className="modal-content">
                <button> <h2 className="modal-title">Following</h2></button>
                {loadingFollowing ? (
                <p>Loading...</p>
                ) : (
                <ul>
                {following.map((person, index) => (
                    <li key={index}>{person.name}</li>
                    ))}
                </ul>
                )}
                <button onClick={closeModal} className="modal-close-btn">
                Close
                </button>
            </div>
            </div>
        )}

        {/* Posts Section */}
        <section className="posts-container">
            <div className="posts-header">
            <h2 className="posts-title">Posts</h2>
            <button onClick={() => navigate("/publish")} className="write-btn">
                Write
            </button>
            </div>
            <div className="posts-grid">
            <div className="post-card">
                <img
                src="https://plus.unsplash.com/premium_photo-1682095664848-014a0a2bfd8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
                alt="Post 1 Image"
                className="post-image"
                />
                <h3 className="post-title"></h3>
                <p className="post-stats">
                Likes: 1.3K <span className="stats-divider">|</span> Views: 2.1K
                <span className="stats-divider">|</span>{" "}
                <button className="delete-btn">Delete</button>
                </p>
            </div>

             
              
            
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProfilePage;
