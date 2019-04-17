import React from 'react';
import "./style.css";
import { Button, Form } from 'semantic-ui-react'

function create(props) {
    return (
        <div>
             <Form>
                <Form.Field widths='equal'>
                 <Form.Input fluid label='Item Name' placeholder='Item Name' />
                 <Form.Input fluid label='Product Link' placeholder='URL' />
                 <Form.Input fluid label='Image URL ' placeholder='Image URL' />
          
                 <select name="cars">
                    <label>Select occasion</label>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Wedding Shower">Wedding Shower</option>
                    <option value="College Stuff">College Stuff</option>
                    <option value="Charity">Charity</option>
                    <option value="Bar Mitzvah">Bar Mitzvah</option>
                    <option value="sweet sixteen">sweet sixteen</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Other">Other</option>
                </select>
               </Form.Field>
               <Button type='submit'>Submit</Button>
        
         </Form>



        </div>
    )



}

export default create;