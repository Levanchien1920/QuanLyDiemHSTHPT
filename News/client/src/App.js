import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrangChu from './pagesHtml/TrangChu'
import TaoThongBao from './pagesHtml/TaoThongBao'
import Post from './pagesHtml/Post'
import Login from './pagesHtml/Login'
import TaoHanNhapDiem from './pagesHtml/TaoHanNhapDiem'
import GiaoVien from './pagesHtml/GiaoVien'
import NhapDiem from './pagesHtml/NhapDiem'
import HocSinh from './pagesHtml/HocSinh'
import PhanHoi from './pagesHtml/PhanHoi'
import './App.css';

export default function App() {
  return (
    <>
        <Router> 
          <Switch>
          <Route path="/" exact render={(props) => <TrangChu />} />
          <Route path="/trangchu" render={(props) => <TrangChu />} />
          <Route path='/post/:postID' render={(props) => <Post />} />
          <Route path="/login" render={(props) => <Login />} />
          <Route path="/taothongbao" render={(props) => <TaoThongBao />} />  
          <Route path="/taohannhapdiem" render={(props) => <TaoHanNhapDiem />} /> 
          <Route path="/giaovien" render={(props) => <GiaoVien />} />
          <Route path="/thoikhoabieu" render={(props) => <GiaoVien />} />
          <Route path="/nhapdiem" render={(props) => <NhapDiem />} /> 
          <Route path="/hocsinh" render={(props) => <HocSinh />} /> 
          <Route path="/phanhoi" render={(props) => <PhanHoi />} /> 
        </Switch>
        </Router>
    </>
  );
}
