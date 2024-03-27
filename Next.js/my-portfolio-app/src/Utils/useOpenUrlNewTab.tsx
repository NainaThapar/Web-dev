
const useOpenUrlNewTab = (url : string) => {
    return () =>  window.open(url, "_blank", "noreferrer");
}

export default useOpenUrlNewTab;