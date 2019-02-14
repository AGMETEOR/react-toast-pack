export const addToStack = (context, item) => {
  const toasts = context.state.items;
  toasts.push(item);
  context.setState({
    items: toasts,
  });
};

export const removeFromStack = (context) => {
  const toasts = context.state.items;
  toasts.shift();
  context.setState({
    items: toasts,
  });
};
