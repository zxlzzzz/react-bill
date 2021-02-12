import styled from "styled-components";
import React, {useState} from 'react';
import { Modal } from 'antd-mobile';
import useTags from "hooks/useTags";
const prompt = Modal.prompt;

const Wrapper = styled.section`
background-color:#fff;
padding:12px 16px;
flex-grow:1;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-start;
>ol{
  margin: 0 -12px;
  >li{
    background-color:#D9D9D9;
    border-radius:18px;
    display:inline-block;
    padding:3px 18px;
    font-size:14px;
    margin:8px 12px;
    &.selected{
    background: #6699CC;
   }
  }
}
> button{
  background:none;
  border:none;
  border-bottom: 1px solid #333;
  padding: 2px 4px;
  color:#666;
  margin-top:8px;
}
`;

type Props = { value :number[]; onChange: (selected:number[])=>void; }

const TagSection:React.FC<Props> = (props)=>{
    const {tags,setTags}  =  useTags();
    const selectedTagIds = props.value;


    const onAddTag = () =>{
        prompt('新增标签', '', [ { text: '取消' },
            { text: '提交', onPress: ((value)=>{
                    const tagName  = value;
                    if (tagName) setTags([...tags,{id:Math.random(),value:tagName}]);
                }) },
        ], 'default', '')
    };
    const onToggleTag = (tagId:number) =>{
        const index = selectedTagIds?.indexOf(tagId);
        if(index >= 0 ){
            props.onChange(selectedTagIds?.filter(t => t !== tagId))
        }else{
            props.onChange([...selectedTagIds,tagId])
        }
    };
    const  GetClassName = (tagId:number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' :'';
    return(
    <Wrapper>
     <ol>
         {tags.map(tag => <li
             onClick={()=>onToggleTag(tag.id)}
             key={tag.id}
             className={GetClassName(tag.id)}
         >{tag.value}</li>)}
     </ol>
     <button onClick={() => onAddTag()}>新增标签</button>
    </Wrapper>
    )
};
export default TagSection

     