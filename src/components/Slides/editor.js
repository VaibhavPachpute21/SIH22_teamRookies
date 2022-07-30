import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Flex, Box} from '@chakra-ui/react'

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    const html = '<p>Please explain grievance in <strong>detail</strong> 😀</p>';
    const contentBlock = htmlToDraft(html);
    
   

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  passData = (data) => {
    console.log(data)
  }

  render() {
   
    
    const { editorState } = this.state;
    return (
      <Flex  w="85vw" h="65vh" py={10} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Box w="70%" h="100%" >
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        {this.passData(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
       
        </Box>
      </Flex>
    );
  }
}

export default ControlledEditor