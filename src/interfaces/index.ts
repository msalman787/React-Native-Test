export interface SearchInputProps {
  onSearch: (query: string) => void;
}

export interface GithubUserItemProps {
  user: any;
  onSelect: (username: string) => void;
}

export interface GithubUserListProps {
  data: any[];
  onSelect: (username: string) => void;
}

export interface UserModalProps {
  visible: boolean;
  user: any;
  onClose: () => void;
}