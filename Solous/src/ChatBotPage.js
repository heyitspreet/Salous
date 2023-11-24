import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
// type message = { id: number, content: '', type: 'user' | 'bot' }
const ChatbotPage = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [messages, setMessages] = useState([]);
  const handleSendRequest = async () => {
    try {
      setResponse('Loading...');
      const url =
        'http://172.17.72.114:5000/get?msg=' + encodeURIComponent(inputText);
      console.log('running request', url);
      const response = await fetch(url, {
        method: 'GET',
      });
      // console.log('response', response.blob());
      const data = await response.json();
      setResponse(data.answer);
      setMessages([
        ...messages,
        {id: messages.length, content: inputText, type: 'user'},
        {id: messages.length + 1, content: data.answer, type: 'bot'},
      ]);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.backDrop}>
      <Button title="Clear" onPress={() => setMessages([])} />
      <View style={styles.chatInputContainer}>
        <TextInput
          placeholder="Type your message"
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <Button title="Ask" onPress={handleSendRequest} />
      </View>

      <View>
        <ScrollView style={styles.chatContainer}>
          {messages.map(message => {
            console.log(
              'message',
              message,
              message.type === 'user' ? styles.userMessage : styles.botMessage,
            );
            return (
              <View
                key={message.id}
                style={[
                  styles.message,
                  message.type === 'user'
                    ? styles.userMessage
                    : styles.botMessage,
                ]}>
                <Text style={styles.textColor}>{message.content}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      {/* {response && <Text>Chatbot Response: {response}</Text>} */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backDrop: {
    backgroundColor: 'white',
  },
  textColor: {
    color: 'black',
    fontSize: 15,
  },
  message: {
    padding: 10,
    width: '70%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 10,
    color: 'black',
  },
  userMessage: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: 'lightblue',
  },
  chatContainer: {
    flexDirection: 'column',
    height: 650,
  },
  chatInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ChatbotPage;
