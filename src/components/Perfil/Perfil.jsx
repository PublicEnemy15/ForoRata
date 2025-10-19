import React, { useState } from 'react';
import Card, { CardHeader, UserMiniCard } from '../Common/Card';
import Button from '../Common/Button';
import UserAvatar from '../Common/UserAvatar';
import { RatIcon, CheckIcon, AddFollowerIcon } from '../Common/Icons';
import { MOCK_FOLLOWERS } from '../../constants/menuConfig';

const FollowCard = () => {
  const [followers, setFollowers] = useState(MOCK_FOLLOWERS);

  // Toggle estado de seguir/dejar de seguir
  const toggleFollow = (id) => {
    setFollowers(followers.map(follower => 
      follower.id === id 
        ? { ...follower, isFollowing: !follower.isFollowing }
        : follower
    ));
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Header con icono de rata */}
      <CardHeader icon={() => <RatIcon size={32} className="sm:w-10 sm:h-10 text-white" />}>
        <span className="text-sm sm:text-base font-medium text-white">
          Tus Últimos Seguidores
        </span>
      </CardHeader>

      {/* Lista de seguidores */}
      <div className="space-y-3">
        {followers.map((follower) => (
          <UserMiniCard
            key={follower.id}
            username={follower.username}
            avatar={<UserAvatar size="medium" />}
            rightContent={
              <Button
                onClick={() => toggleFollow(follower.id)}
                variant={follower.isFollowing ? 'follow-selected' : 'follow-unselected'}
                size="square"
                ariaLabel={follower.isFollowing ? "Dejar de seguir" : "Seguir"}
                iconLeft={
                  follower.isFollowing 
                    ? <CheckIcon size={16} className="text-white" />
                    : <AddFollowerIcon size={16} className="text-white" />
                }
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FollowCard;