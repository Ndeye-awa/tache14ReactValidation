import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const PostDetail = () => {
  const { selectedPost, goBackToList, isPostSelected } = useContext(PostContext);

  if (!isPostSelected) return null;

  return (
    <div className="container mt-5">
      {/* Ajout du centrage avec d-flex et justify-content-center */}
      <div className="row justify-content-center">
        {/* Ajout d'une classe mx-auto pour centrer la carte */}
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="card shadow" style={{ maxWidth: '100%' }}>
            <div className="card-header">
              <h3 className="text-center">Détails</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">{selectedPost.title}</h4>
              <p className="card-text text-justify">{selectedPost.body}</p>
              <button onClick={goBackToList} className="btn btn-outline-danger d-block mx-auto">
                Retour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
