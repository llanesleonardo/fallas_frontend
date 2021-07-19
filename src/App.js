import React from "react"; 
import {BrowserRouter,Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import NavigationMain from "./components/Layout/Navigations/NavigationMain";
import Home from "./pages/Home";
import Create from "./pages/Create";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShowCatalogs from "./pages/Catalogs/ShowCatalog";
import ShowCampos from "./pages/Catalogs/Campos/ShowCampos";
import ShowCampo from "./pages/Catalogs/Campos/ShowCampo";
import ShowCuadros from "./pages/Catalogs/Cuadros/ShowCuadros";
import ShowCuadro from "./pages/Catalogs/Cuadros/ShowCuadro";
import ShowVariedades from "./pages/Catalogs/Variedades/ShowVariedades";
import ShowVariedad from "./pages/Catalogs/Variedades/ShowVariedad";
import ShowAreas from "./pages/Catalogs/Areas/ShowAreas";
import ShowArea from "./pages/Catalogs/Areas/ShowArea";
import ShowLineas from "./pages/Catalogs/Lineas/ShowLineas";
import ShowLinea from "./pages/Catalogs/Lineas/ShowLinea";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Footer from "./components/Layout/Footer";

const mockPosts =[
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

  return(
      <div className="App">
        <Container fluid className="post_centrado">
        <BrowserRouter> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/create" exact component={Create} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/catalogs" exact component={ShowCatalogs} />
            <Route path="/catalogs/campos" exact component={ShowCampos} />
            <Route path="/catalogs/campos/campo/:id" exact component={ShowCampo} />
            <Route path="/catalogs/cuadros" exact component={ShowCuadros} />
            <Route path="/catalogs/cuadros/cuadro/:id" exact component={ShowCuadro} />
            <Route path="/catalogs/variedades" exact component={ShowVariedades} />
            <Route path="/catalogs/variedades/variedad/:id" exact component={ShowVariedad} />
            <Route path="/catalogs/areas" exact component={ShowAreas} />
            <Route path="/catalogs/areas/area/:id" exact component={ShowArea} />
            <Route path="/catalogs/lineas" exact component={ShowLineas} />
            <Route path="/catalogs/lineas/linea/:id" exact component={ShowLinea} />
            <Route path="/:id" exact component={SinglePost} />
          </Switch>
          <Footer />
        </BrowserRouter>
        </Container>
      </div>
  )
  
}

export default App;
