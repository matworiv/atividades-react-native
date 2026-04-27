import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Image, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
} from 'react-native';

export default function TelaLogin() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.window}>
        
        {/* Barra de Título */}
        <View style={styles.titleBar}>
          <Text style={styles.titleBarText}>CrowOS_Auth.exe</Text>
          <View style={styles.titleBarButtons}>
            <View style={styles.miniButton}><Text style={styles.miniButtonText}>_</Text></View>
            <View style={styles.miniButton}><Text style={styles.miniButtonText}>X</Text></View>
          </View>
        </View>

        <View style={styles.windowContent}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo-crow.png')} 
              style={styles.logo}
              resizeMode="contain" 
            />
          </View>

          <Text style={styles.loginTitle}>Acesso ao Terminal</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
              style={styles.input}
              placeholder="root@crowos"
              placeholderTextColor="#444"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#444"
              secureTextEntry={true}
            />
          </View>

          {/* Novos botões de apoio */}
          <View style={styles.linksContainer}>
            <TouchableOpacity>
              <Text style={styles.linkText}>[Esqueceu a senha?]</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>[Novo Usuário]</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Versão ALPHA0.1 - Build 001</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  window: {
    backgroundColor: '#1a1a1a', 
    width: '85%',
    borderWidth: 2,
    borderTopColor: '#333',
    borderLeftColor: '#333',
    borderRightColor: '#050505',
    borderBottomColor: '#050505',
    padding: 2,
  },
  titleBar: {
    backgroundColor: '#333', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  titleBarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  titleBarButtons: {
    flexDirection: 'row',
  },
  miniButton: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#444',
    width: 18,
    height: 18,
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  windowContent: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 150, // Aumentado conforme seu pedido anterior
    height: 150,
  },
  loginTitle: {
    color: '#00FF41',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    textTransform: 'uppercase',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#AAA',
    fontSize: 12,
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  input: {
    backgroundColor: '#000',
    borderWidth: 2,
    borderTopColor: '#050505', 
    borderLeftColor: '#050505',
    borderRightColor: '#333',
    borderBottomColor: '#333',
    padding: 10,
    color: '#FFF',
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 5,
  },
  linkText: {
    color: '#00FF41',
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  button: {
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderTopColor: '#444',
    borderLeftColor: '#444',
    borderRightColor: '#000',
    borderBottomColor: '#000',
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  footer: {
    marginTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#444',
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  }
});