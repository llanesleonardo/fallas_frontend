import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Post from "./components/Post";
const posts =[
   { "id": 1,
    "Nombre": "Post 1",
    "Slug": "post-1",
    "body": "Este es el post 1, una pequeña descripción.\n\n![ANTIGENO ROCHE .png](/uploads/ANTIGENO_ROCHE_403542253a.png)\n\nCon una imagen de roche.\n",
    "fecha_creacion": "2021-07-02T17:00:00.000Z",
    "Status": true,
    "author": {
        "id": 1,
        "username": "Usuario 1",
        "email": "user@gmail.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "role": 1,
        "created_at": "2021-07-02T19:58:59.670Z",
        "updated_at": "2021-07-02T19:58:59.682Z"
    },
    "published_at": "2021-07-02T19:59:06.269Z",
    "created_at": "2021-07-02T19:55:18.858Z",
    "updated_at": "2021-07-02T20:00:52.212Z",
    "img_ppal": {
        "id": 1,
        "name": "Cubrebocas KN95 .jpg",
        "alternativeText": "",
        "caption": "",
        "width": 718,
        "height": 661,
        "formats": {
            "thumbnail": {
                "name": "thumbnail_Cubrebocas KN95 .jpg",
                "hash": "thumbnail_Cubrebocas_KN_95_6250288cb4",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 169,
                "height": 156,
                "size": 6.56,
                "path": null,
                "url": "/uploads/thumbnail_Cubrebocas_KN_95_6250288cb4.jpg"
            },
            "small": {
                "name": "small_Cubrebocas KN95 .jpg",
                "hash": "small_Cubrebocas_KN_95_6250288cb4",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 460,
                "size": 33.58,
                "path": null,
                "url": "/uploads/small_Cubrebocas_KN_95_6250288cb4.jpg"
            }
        },
        "hash": "Cubrebocas_KN_95_6250288cb4",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 56.53,
        "url": "/uploads/Cubrebocas_KN_95_6250288cb4.jpg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2021-07-02T19:52:15.212Z",
        "updated_at": "2021-07-02T19:52:15.226Z"
    }
  },
  { "id": 2,
  "Nombre": "Post 1",
  "Slug": "post-1",
  "body": "Este es el post 1, una pequeña descripción.\n\n![ANTIGENO ROCHE .png](/uploads/ANTIGENO_ROCHE_403542253a.png)\n\nCon una imagen de roche.\n",
  "fecha_creacion": "2021-07-02T17:00:00.000Z",
  "Status": true,
  "author": {
      "id": 1,
      "username": "Usuario 1",
      "email": "user@gmail.com",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "role": 1,
      "created_at": "2021-07-02T19:58:59.670Z",
      "updated_at": "2021-07-02T19:58:59.682Z"
  },
  "published_at": "2021-07-02T19:59:06.269Z",
  "created_at": "2021-07-02T19:55:18.858Z",
  "updated_at": "2021-07-02T20:00:52.212Z",
  "img_ppal": {
      "id": 1,
      "name": "Cubrebocas KN95 .jpg",
      "alternativeText": "",
      "caption": "",
      "width": 718,
      "height": 661,
      "formats": {
          "thumbnail": {
              "name": "thumbnail_Cubrebocas KN95 .jpg",
              "hash": "thumbnail_Cubrebocas_KN_95_6250288cb4",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "width": 169,
              "height": 156,
              "size": 6.56,
              "path": null,
              "url": "/uploads/thumbnail_Cubrebocas_KN_95_6250288cb4.jpg"
          },
          "small": {
              "name": "small_Cubrebocas KN95 .jpg",
              "hash": "small_Cubrebocas_KN_95_6250288cb4",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 460,
              "size": 33.58,
              "path": null,
              "url": "/uploads/small_Cubrebocas_KN_95_6250288cb4.jpg"
          }
      },
      "hash": "Cubrebocas_KN_95_6250288cb4",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 56.53,
      "url": "/uploads/Cubrebocas_KN_95_6250288cb4.jpg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2021-07-02T19:52:15.212Z",
      "updated_at": "2021-07-02T19:52:15.226Z"
  }
}

  ];


function App() {
  return (
    <div className="App">
 <Container className="post_centrado">
    <Row>
            {posts.map(post =>(
              <Post 
              key={post.id}
              title={post.Nombre} 
              url={post.img_ppal && post.img_ppal.url} 
              description={post.body} 
              creation_date={post.created_at} 
              />
             ))}
    </Row>
  </Container>
    </div>
  );
}

export default App;
