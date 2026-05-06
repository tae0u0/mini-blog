import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import styled from 'styled-components';

import MainPage from './components/pages/MainPage';
import PostWritePage from './components/pages/PostWritePage';
import PostViewPage from './components/pages/PostViewPage';
import data from './data.json';

const MainTitleText = styled.p`
    font-size: 24px;
	font-weight: bold;
	text-align: center;
`;

function App(props) {
	const [posts, setPosts] = useState(data);

	const addPost = (post) => {
		setPosts([post, ...posts]);
	};

	return (
		<BrowserRouter>
			<MainTitleText>소플의 미니 블로그</MainTitleText>
			<Routes>
				<Route index element={<MainPage posts={posts} />}/>
				<Route path='post-write' element={<PostWritePage onAddPost={addPost} />}/>
				<Route path='post/:id' element={<PostViewPage posts={posts} />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;