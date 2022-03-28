import React, {useState, useEffect} from 'react';
import {
    ListItem,
    ListItemText,
    Typography,
    List
  } from '@material-ui/core';


export default function Contacts({ contacts, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    useEffect(async () => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.LOCALHOST_KEY)
      );
      setCurrentUserName(data.username);
    }, []);
    const changeCurrentChat = (index, contact) => {
      setCurrentSelected(index);
      changeChat(contact);
    };
    return (
        <>
        {currentUserName && (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                contacts.map((contact, index) => {
                    return (
                        <>
                        <ListItem alignItems="flex-start"  key={contact._id} onClick={() => changeCurrentChat(index, contact)}>
                        <ListItemText
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                {contact.username}
                                </Typography>
                            </React.Fragment>
                            }
                        />
                        </ListItem>
                        </>
                    )
                })
            }
            <div>
                <p>Your username: {currentUserName}</p>
            </div>
            </List>
        )}
        </>
    )
};