# 发送验证码

## ✍️ 实现

`SendCode.tsx`

```tsx
import React, { FC, useEffect, useRef, useState } from "react";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(null);
  savedCallback.current = callback;

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export interface SendCodeProps {
  time?: number;
  onSend?: () => void;
  initText?: string;
  runText?: (v: string) => string;
  endText?: string;
}

const SendCode: FC<SendCodeProps> = ({ time, onSend, initText, runText, endText }) => {
  const [text, setText] = useState(initText);
  const [second, setSecond] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const handleSend = () => {
    setRunning(true);
    setText(runText(time));
    onSend && onSend();
  };

  useInterval(
    () => {
      const val = second + 1;
      if (time === val) {
        setSecond(0);
        setRunning(false);
        setText(endText);
      } else {
        setSecond(val);
        setText(runText(time - val));
      }
    },
    isRunning ? 1000 : null
  );

  return (
    <button disabled={isRunning} onClick={handleSend} className="sendcode-btn">
      {text}
    </button>
  );
};

SendCode.defaultProps = {
  time: 60,
  initText: '获取验证码',
  runText: (v: string) => `${v}秒后重发`,
  endText: '重新获取验证码',
};

export default SendCode;
```

---

## 🔗 参考

- [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
