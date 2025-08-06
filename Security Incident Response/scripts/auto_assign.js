(function executeRule(current, previous /*null when async*/) {
    if (!current.assignment_group) {
        if (current.priority == '1' || current.priority == '2') {
            current.assignment_group = '97ee493f938fe61081c2b4697bba1058'; 
        } else {
            current.assignment_group = 'f61151bf938fe61081c2b4697bba109d';
        }
    }
})(current, previous);
