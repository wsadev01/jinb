import React, { useState, useEffect } from 'react';
import TagBadge from './TagBadge';
import Button  from '../components/lilly/Button';
import { lillymd } from '../rsrc/lilly/markdown/md';
import DOMPurify from 'dompurify';
import axiosInstance from '../rsrc/axios';

const Post = (props) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const getEntry = async () => {
      try {
        const response = await axiosInstance.get('00_hello-world.md');
        return response.data;
      } catch (error) {
        console.error("Error fetching entry:", error);
        return null;
      }
    };

    const fetchData = async () => {
      const content = await getEntry();
      if (content) {
        const unsafeHTMLContent = lillymd.render(content);
        const sanitizedHTMLContent = DOMPurify.sanitize(unsafeHTMLContent);
				console.log(sanitizedHTMLContent);
        setHtmlContent(sanitizedHTMLContent);
      }
    };

    fetchData();
  }, []);

  return (

    <>
      <div className="container">
        <div className="column bg-default" dangerouslySetInnerHTML={{__html: htmlContent}}>
        </div>
      </div>
      <div className="container grid grid-flow-col auto-cols-max">
        <Button><a className="text-primary-light  hover:underline" href={props.urls.comment} target="_blank">{props.labels.comment}</a></Button>
      </div>
    </>
  );
};

export default Post;
