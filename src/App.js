import { useState } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import ArticleForm from './ArticleForm';

function App() {
  const[converText, setConvvertText] = useState('');
  return (
    <div>
      <ArticleForm />
    </div>
  );
}

export default App;
